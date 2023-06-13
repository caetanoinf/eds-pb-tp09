export const user = {
  id: "123456789",
  firstName: "Lucio",
  lastName: "Caetano",
  email: "lucio.caetano@al.infnet.edu.br",
  course: "Engenharia de Software",
  phone: "21999999999",
  avatarUrl: "https://pbs.twimg.com/profile_images/1539195475613581312/sLkGMf4B_400x400.jpg",
  classes: [
    {
      id: 1,
      name: "Projeto de Bloco",
      grades: [
        {
          id: 1,
          name: "TP1",
          grade: 10,
        },
        {
          id: 2,
          name: "TP2",
          grade: 9,
        },
        {
          id: 3,
          name: "TP3",
          grade: 8,
        },
      ],
      missedClasses: 2,
    },
    {
      id: 2,
      name: "Desenvolvimento Mobile com RN",
      grades: [
        {
          id: 1,
          name: "TP1",
          grade: 8.5,
        },
        {
          id: 2,
          name: "TP2",
          grade: 9.2,
        },
        {
          id: 3,
          name: "TP3",
          grade: 9.9,
        },
      ],
      missedClasses: 10,
    },
  ],
};
