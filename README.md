# Playground

Welcome to the Playground repository! This is a space dedicated to housing all our front-end experiments. Whether it's a design or engineering experiment, you'll find it here. This repository is managed by Renaissance Innovation Labs and is meant for internal exploration, testing, and showcasing of innovative front-end techniques and tools.

## Repository Link

[Frontend Libraries on GitHub](https://github.com/Renaissance-Innovation-Labs/frontend-libraries)

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Playground repository is a mono repo that includes various front-end experiments. These experiments range from UI/UX design explorations to engineering solutions and tools. Our goal is to create a collaborative environment where we can test and refine new ideas quickly and efficiently.

## Getting Started

To get started with this repository, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Renaissance-Innovation-Labs/frontend-libraries.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd frontend-libraries
    cd experiment/tool folder
    ```
3. **Set up development environment**
   
   Use the directions in the README.md for the project to set up the development environment.

## Project Structure

The repository is organized as follows:

```
frontend-libraries/
│
├── experiments/
│ ├── experiment-1/
│ ├── experiment-2/
│ ├── experiment-3/
│ └── ...
│
├── tools/
│ ├── tool-1/
│ ├── tool-2/
│ └── ...
│
├── README.md
├── package.json
└── ...
```


- **experiments/**: Contains all the design and engineering experiments.
- **tools/**: Contains various frontend tools and utilities developed during our experiments.

### Using Workspaces

To ensure each experiment and tool has its own `node_modules` and does not affect others, we use npm workspaces. Here's how to set it up:

1. **Initialize the mono repo:**

    ```bash
    npm init -y
    ```

2. **Configure `package.json` to use workspaces:**

    Update your `package.json` to include a `workspaces` property:

    ```json
    {
      "name": "frontend-libraries",
      "version": "1.0.0",
      "private": true,
      "workspaces": [
        "experiments/*",
        "tools/*"
      ]
    }
    ```

3. **Set up each experiment/tool with its own `package.json`:**

    For example, in `experiments/experiment-1`:

    ```bash
    mkdir experiments/experiment-1
    cd experiments/experiment-1
    npm init -y
    ```

    Repeat this for each experiment and tool.

4. **Install dependencies for each experiment/tool:**

    Navigate to each experiment/tool directory and install the necessary dependencies. For example:

    ```bash
    cd experiments/experiment-1
    npm install some-dependency
    ```

## Contributing

We welcome contributions from all team members. To contribute, please follow these steps:

1. **Fork the repository**
2. **Create a new branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes**
4. **Commit your changes**: `git commit -m 'Add some feature'`
5. **Push to the branch**: `git push origin feature/your-feature-name`
6. **Create a pull request**

Please ensure your code follows our coding standards and includes the appropriate tests.

## License

This repository is licensed under the MIT License. For more details, please look at the [LICENSE](LICENSE) file.

---

Happy experimenting! If you have any questions or need assistance, contact the repository maintainers.

---

_This README is generated and maintained by Renaissance Innovation Labs._
