import Link from "next/link";
import Navigation from "../components/Navigation";
import { Container } from "@chakra-ui/react";

const FirstPost = ({}) => {
  return (
    <>
      <Navigation />
      <Container>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Container>
    </>
  );
};
export default FirstPost;
