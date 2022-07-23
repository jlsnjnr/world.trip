import { Flex, Divider } from "@chakra-ui/react";

export default function DividerUi() {
  return (
    <Flex my='80px' mx='auto' align='center' w='100%' justify='center'>
      <Divider maxW='90px' borderWidth='2px' borderColor="dark.200" />
    </Flex>
  )
}