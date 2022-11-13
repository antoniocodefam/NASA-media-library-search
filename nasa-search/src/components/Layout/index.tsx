import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import AppHeader from "../Header";

export default function AppLayout() {
  return (
    <>
      <AppHeader />
      <Container className='my-4'>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
}
