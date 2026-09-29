"use client";
import { useState } from "react";
import Link from "next/link";
import Field from "../ui/Field";
import Button from "../ui/Button";
import { Facebook, Google } from "../ui/Icons";

type Mode = "login" | "signup";
type Errors = Partial<Record<"name" | "email" | "password", string>>;

const copy = {
  login: { eyebrow: "Sign In", title: "Welcome Back", cta: "Sign In", alt: "New user?", altLink: "Create an account", href: "/signup" },
  signup: { eyebrow: "Create an Account", title: "Welcome to ByteSpace", cta: "Continue", alt: "Already have an account?", altLink: "Login", href: "/login" },
} as const;

function validate(mode: Mode, v: { name: string; email: string; password: string }): Errors {
  const e: Errors = {};
  if (mode === "signup" && v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (v.password.length < 8) e.password = "Password must be at least 8 characters.";
  return e;
}

export default function AuthForm({ mode }: { mode: Mode }) {
  const c = copy[mode];
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) => setValues((p) => ({ ...p, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(mode, values);
    setErrors(errs);
    setDone(Object.keys(errs).length === 0); // demo only – no backend in this assessment
  };

  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="text-lg text-primary">{c.eyebrow}</p>
        <h1 className="font-heading text-4xl font-semibold leading-[1.2] tracking-tight md:text-[44px]">{c.title}</h1>
      </div>

      <form onSubmit={onSubmit} noValidate className="flex flex-col items-end gap-6">
        {mode === "signup" && <Field label="Full Name" placeholder="Jamie Davis" autoComplete="name" value={values.name} onChange={set("name")} error={errors.name} />}
        <Field label="Email" type="email" placeholder="designer@example.com" autoComplete="email" value={values.email} onChange={set("email")} error={errors.email} />
        <Field label="Password" type="password" placeholder="********" autoComplete={mode === "login" ? "current-password" : "new-password"} value={values.password} onChange={set("password")} error={errors.password} />
        <Button type="submit">{c.cta}</Button>
        {done && <p role="status" className="w-full text-right text-sm text-primary">Looks good! (Demo only — no backend connected.)</p>}
      </form>

      {mode === "login" && (
        <div className="flex flex-col items-center gap-8">
          <div className="flex w-full items-center gap-3 text-soft"><span className="h-px flex-1 bg-gray-200" />or<span className="h-px flex-1 bg-gray-200" /></div>
          <div className="flex gap-4">
            {[{ n: "Facebook", i: <Facebook /> }, { n: "Google", i: <Google /> }].map((s) => (
              <button key={s.n} type="button" aria-label={`Continue with ${s.n}`} className="flex h-[72px] w-[72px] items-center justify-center rounded-3xl border border-[#d1d1d1] bg-white hover:bg-gray-50">{s.i}</button>
            ))}
          </div>
        </div>
      )}

      <p className="text-center text-base text-soft">{c.alt} <Link href={c.href} className="text-primary hover:underline">{c.altLink}</Link></p>
    </div>
  );
}
