import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../utils/StateProvider";
export default function Navbar() {
  const [{ userInfo }] = useStateProvider();
  console.log({ userInfo },"from navbar");
  return (
  <Container>
    <div className="search__bar">
      <FaSearch />
      <input type="text" placeholder="What do you want to listen to?" />
    </div>
    <div className="avatar">
      <a href="#">
        <CgProfile />
        <span>{userInfo?.userName}</span>
      </a>
    </div>
  </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  position: sticky;
  align-items: center;
  height:15vh;
  top: 0;
  transition: 0.3s ease-in-out;
  background-color: none;

  .search__bar{
    width: 30%;
    padding: 0.4rem 1rem;
    background-color: white;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    input{
      border: none;
      height: 2rem;
      width: 100%;
      &:focus{
        outline: none;
      }
    }
  }
  .avatar{
    padding: 0.3rem 0.4rem;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    padding-right: 1rem;

    a{
      display: flex;
      justify-content: center;
      text-decoration: none;
      color: white;
      font-weight: bold;
      gap: 0.5rem;
      align-items: center;

      svg{
        background-color: #282828;
        padding: 0.2rem;
        border-radius: 1rem;
        color: #c7c5c5;
        font-size: 1.3rem;
      }
    }
  }
`;
