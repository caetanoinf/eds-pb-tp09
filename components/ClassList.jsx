import { Box, FlatList, Pressable, Text } from "native-base";

export function ClassList({ classes }) {
  const calculateAverage = (grades) => {
    return grades.reduce((acc, curr) => acc + curr.grade, 0) / grades.length;
  };

  return (
    <FlatList
      data={classes}
      renderItem={({ item }) => (
        <Pressable p="4" flex="1" borderWidth="1" borderColor="gray.300" rounded="md" _pressed={{ bg: "gray.100" }}>
          <Text fontWeight="bold">{item.name}</Text>

          <Text mt="2" color="gray.500">
            Média: {calculateAverage(item.grades).toFixed(2)}
          </Text>

          <Text mt="2" color="gray.500">
            Faltas: {item.missedClasses}
          </Text>
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <Box h="2" />}
    />
  );
}
