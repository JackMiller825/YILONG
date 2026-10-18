import { token } from "../../lib/token";
import { XIcon } from "./icons";

export function XLink({ className, children, label }) {
  const disabled = !token.xUrl;
  return (
    <a
      className={className}
      href={disabled ? undefined : token.xUrl}
      aria-disabled={disabled ? "true" : undefined}
      tabIndex={disabled ? -1 : undefined}
      target={disabled ? undefined : "_blank"}
      rel={disabled ? undefined : "noopener"}
      aria-label={label}
      data-link-role="x"
    >
      {children}
    </a>
  );
}

export function XIconLink({ className, label, children }) {
  return (
    <XLink className={className} label={label}>
      <XIcon />
      {children}
    </XLink>
  );
}
