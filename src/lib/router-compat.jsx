/**
 * Compatibility layer so pages written against a classic client router keep
 * working on top of TanStack Router (the router used by this project).
 * Frontend-only shim: no backend behaviour changes.
 */
import {
  Link as TanstackLink,
  Outlet,
  useLocation,
  useNavigate as useTanstackNavigate,
  useParams as useTanstackParams,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";

export { Outlet, useLocation };

export function useParams() {
  const params = useTanstackParams({ strict: false }) || {};
  return {
    ...params,
    id: params.id ?? params.taskId,
    taskId: params.taskId ?? params.id,
  };
}

export function useNavigate() {
  const navigate = useTanstackNavigate();
  const router = useRouter();

  return (to, options = {}) => {
    if (typeof to === "number") {
      router.history.go(to);
      return;
    }
    if (typeof to === "string") {
      navigate({ to, replace: !!options.replace });
      return;
    }
    navigate(to);
  };
}

export function Link({ to, children, ...rest }) {
  return (
    <TanstackLink to={to} {...rest}>
      {children}
    </TanstackLink>
  );
}

export function NavLink({ to, className, children, ...rest }) {
  const { pathname } = useLocation();
  const isActive = pathname === to || (to !== "/" && pathname.startsWith(`${to}/`));
  const resolvedClassName =
    typeof className === "function" ? className({ isActive }) : className;

  return (
    <TanstackLink to={to} className={resolvedClassName} {...rest}>
      {typeof children === "function" ? children({ isActive }) : children}
    </TanstackLink>
  );
}

export function Navigate({ to, replace = true }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace });
  }, [to, replace]);

  return null;
}
