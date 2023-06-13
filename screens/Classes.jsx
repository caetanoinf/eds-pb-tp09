import { Heading, ScrollView, VStack } from "native-base";
import { UserHeader } from "../components/UserHeader";
import { ClassList } from "../components/ClassList";
import { user } from "../data";

export function ClassesScreen() {
  return (
    <ScrollView p="4">
      <VStack space="8">
        <UserHeader avatarUrl={user.avatarUrl} firstName={user.firstName} lastName={user.lastName} />

        <Heading size="md">📚 Disciplinas</Heading>

        <ClassList classes={user.classes} />
      </VStack>
    </ScrollView>
  );
}
