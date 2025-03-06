const completionSpec: Fig.Spec = {
  name: "gitmoji",
  description: "A gitmoji interactive client for using gitmojis on commit messages.",
  subcommands: [
    {
     options: [
        {
          name: ["--commit", "-c"],
          description: "Interactively commit using the prompts",
        },
        {
          name: ["--update", "-u"],
          description: "Sync emoji list with the repo",
        },
      ],
    },
  ],
};
export default completionSpec;
