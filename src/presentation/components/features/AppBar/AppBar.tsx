import { getInitials } from "@/application/utils/getInitials";
import { useAuth } from "@/presentation/contexts/AuthContext";
import { Paragraph } from "../../elements/Paragraph";
import { Logo } from "../../modules/Logo";
import * as S from "./styles";

export function AppBar() {
  const { currentUser } = useAuth();

  console.log(currentUser);

  const displayName = currentUser?.email?.split("@")[0] as string;

  const initials = getInitials(displayName);

  return (
    <S.AppBarContainer>
      <Logo size="sm" />
      <S.MenuContainer>
        <Paragraph>{displayName}</Paragraph>
        <S.ProfileContainer>
          <S.ProfileImg src={currentUser?.photoURL || ""}>
            {!currentUser?.photoURL && initials}
          </S.ProfileImg>
        </S.ProfileContainer>
      </S.MenuContainer>
    </S.AppBarContainer>
  );
}
