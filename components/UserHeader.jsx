import { Avatar, HStack, Heading, Text, VStack } from "native-base";

export function UserHeader({ firstName, lastName, avatarUrl }) {
  return (
    <HStack justifyContent="space-between">
      <VStack>
        <Text>👋 Bem-vindo,</Text>
        <Heading>
          {firstName} {lastName}
        </Heading>
      </VStack>

      <Avatar
        bg="green.500"
        source={{
          uri: avatarUrl,
        }}
      />
    </HStack>
  );
}
