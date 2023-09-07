import styled from "styled-components";
import {Button} from "../../../components/Button";

const StyledContacts = styled.section`
    ${Button} {
      margin-bottom: 45px;
      transition: .2s ease-in-out;
    }
`
const ContactsText = styled.p`
  font-size: 18px;
  max-width: 300px;
  margin-bottom: 30px;
  text-align: center;
`

export const S = {
    StyledContacts,
    ContactsText
}