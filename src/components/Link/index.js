import Link from "next/link";

import * as S from "./styles";

export default function DefaultLink({ children, href }) {
  return (
    <Link href={href}>
      <S.DefaultLinkStyle>{children}</S.DefaultLinkStyle>
    </Link>
  );
}
