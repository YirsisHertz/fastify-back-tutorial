export const UsersRoutes = [
  {
    url: "/users",
    method: "GET",
    handler: (request, reply) => {
      return [
        {
          id: 1,
          name: "John",
          email: "john@example.com",
        },
        {
          id: 2,
          name: "Jane",
          email: "jane@example.com",
        },
        {
          id: 3,
          name: "Yirsis",
          email: "yirsis@example.com",
        },
      ];
    },
  },
  {
    url: "/users/:id",
    method: "GET",
    handler: (request, reply) => {
      const { id } = request.params;

      return {
        id: 3,
        name: "Yirsis",
        email: "yirsis@example.com",
      };
    },
  },
  {
    url: "/users",
    method: "POST",
    handler: (request, reply) => {
      return { data: request.body };
    },
  },
];
