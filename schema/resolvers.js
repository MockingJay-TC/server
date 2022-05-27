const { User } = require("../models/User.model");

const resolvers = {
  Query: {
    Hi: () => {
      return "Hello World";
    },

    getUsers: async () => {
      const users = User.find();
      return users;
      // return User;
    },
    getUser: async () => {
      // const { id } = args;
      const user = await User.findOne({ where: { firstName: "Victor" } });
      // const user = await User.where("firstName").equals("Victor");
      // const user = await User.findById(id);
      return user;
    },
    // getSkills: async () => {
    //   const skills = await User.findOne({ firstName: "Victor" }).skills;
    //   return skills;
    // },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const { firstName, lastName, about, email, age } = args.user;
      const user = new User({
        firstName,
        lastName,
        about,
        email,
        age,
      });
      await user.save();
      return user;
    },
    updateUser: async (parent, args) => {
      const user = await User.findOneAndUpdate(
        { firstName: "Victor" },
        { email: args.email },
        { new: true }
      );
      user.otherName = "Ife_Oluwa";
      user.email = "victoraremu123@gmail.com";
      user.title = "Software Developer";
      user.linkedin = "https://www.linkedin.com/in/victor-aremu-68b049134";
      user.github = "https://github.com/MockingJay-TC";
      user.hobbies = ["Gaming", "Playing Instrument"];
      user.skills = [
        { title: "HTML", url: "https://www.w3schools.com/html" },
        { title: "CSS", url: "https://www.w3schools.com/css" },
        { title: "JavaScript", url: "https://www.javascript.com" },
        { title: "TypeScipt", url: "https://www.typescriptlang.org" },
        { title: "React.js", url: "https://reactjs.org" },
        { title: "Next.js", url: "https://nextjs.org" },
        { title: "Sveltve", url: "https://svelte.dev" },
        { title: "Tailwindcss", url: "https://tailwindcss.com" },
      ];
      user.projects = [
        {
          title: "Netflix-Clone",
          description: "This is a Netflix Clone",
          technologies: [
            { name: "Next.js", url: "https://nextjs.org" },
            { name: "Tailwindcss", url: "https://tailwindcss.com" },
          ],
        },
        {
          title: "Hulu-Clone",
          description: "This is a Hulu Clone",
          technologies: [
            { name: "Next.js", url: "https://nextjs.org" },
            { name: "Tailwindcss", url: "https://tailwindcss.com" },
          ],
        },
      ];

      await user.save();
      return user;
    },
  },
};

module.exports = { resolvers };
