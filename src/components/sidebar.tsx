import React from "react";
import styled from "styled-components";
import {
  FaRegBuilding,
  FaRegEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
  FaInstagram,
} from "react-icons/fa";

import Button from "./button";
import { useGitHubUser } from "../data";
import { color, spacing } from "../utils";

const Avatar = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 25%;
`;

const CenterAlignedText = styled.span`
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 0 ${spacing(5)};
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin: ${spacing(3)};
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  color: ${color("primary")};

  &:hover {
    color: ${color("secondary")};
    text-decoration: none;
  }
`;

type Props = { className?: string };

const Sidebar = ({ className }: Props) => {
  const { viewer: my } = useGitHubUser();

  return (
    <div className={className}>
      <Avatar src={my.avatarUrl} />
      <h1>{my.name}</h1>
      <Row>
        <Button>About</Button>
        <Button>Blog</Button>
      </Row>
      <CenterAlignedText>{my.bio}</CenterAlignedText>
      <div>
        <ContactDetail>
          <FaRegBuilding size="1.2rem" title="Company" />
          <span>{my.company}</span>
        </ContactDetail>
        <ContactDetail>
          <FaMapMarkerAlt size="1.2rem" title="Location" />
          <span>{my.location}</span>
        </ContactDetail>
        <ContactDetail>
          <FaRegEnvelope size="1.2rem" title="Email address" />
          <Link href={`mailto:${my.email}`}>{my.email}</Link>
        </ContactDetail>
      </div>
      <Row>
        <Link href={my.url}>
          <FaGithub size="1.2rem" title="GitHub" />
        </Link>
        <Link href="https://www.linkedin.com/in/lawrencejb/">
          <FaLinkedin size="1.2rem" title="LinkedIn" />
        </Link>
        <Link href="https://stackoverflow.com/users/13417313">
          <FaStackOverflow size="1.2rem" title="Stack Overflow" />
        </Link>
        <Link href="https://twitter.com/lawrencejberry">
          <FaTwitter size="1.2rem" title="Twitter" />
        </Link>
        <Link href="https://www.instagram.com/lawrencejberry">
          <FaInstagram size="1.2rem" title="Instagram" />
        </Link>
      </Row>
    </div>
  );
};

export default styled(Sidebar)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 1px 0 2px ${color("outline")};
  padding: ${spacing(6)} ${spacing(5)};
  background-color: ${color("background")};

  & > * {
    margin: ${spacing(4)} 0;
  }
`;
