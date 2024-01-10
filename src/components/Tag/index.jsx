import { Container } from "./style"

export function Tag({ title, backgroundColor, ...rest }) {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      {title}
    </Container>
  );
}
