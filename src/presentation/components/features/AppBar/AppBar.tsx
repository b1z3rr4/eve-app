import { getInitials } from "@/application/utils/getInitials";
import { useAuth } from "@/presentation/contexts/AuthContext";
import { useState } from "react";
import { Paragraph } from "../../elements/Paragraph";
import { DropDown } from "../../modules/DropDown";
import { Logo } from "../../modules/Logo";
import * as S from "./styles";

export function AppBar() {
  const { currentUser, logout } = useAuth();

  if (!currentUser) return;

  const displayName = currentUser?.email?.split("@")[0] as string;

  const initials = getInitials(displayName);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = () => {
    setIsOpen(false);
    logout();
  };

  return (
    <S.AppBarContainer>
      <Logo size="sm" />
      <DropDown.Root>
        <DropDown.Trigger onClick={toggleDropdown}>
          <S.MenuContainer>
            <Paragraph>{displayName}</Paragraph>
            <S.ProfileContainer>
              <S.ProfileImg src={currentUser?.photoURL || ""}>
                {!currentUser?.photoURL && initials}
              </S.ProfileImg>
            </S.ProfileContainer>
          </S.MenuContainer>
        </DropDown.Trigger>
        <DropDown.Menu isOpen={isOpen}>
          <DropDown.Item onClick={handleItemClick}>Sair</DropDown.Item>
        </DropDown.Menu>
      </DropDown.Root>
    </S.AppBarContainer>
  );
}
