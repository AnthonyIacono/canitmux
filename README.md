# Can It Mux

## Overview

Welcome to the "Can It Mux" GitHub repository! This project exists with the goal of informing laptop enthusiasts about different types of graphics switching technologies found in machines running with both an integrated GPU and a dedicated GPU. More specifically, the website serves as a way to determine the following:

1. What types of CPU/GPU configurations that laptop models support.
2. The graphic switching technologies found in the afformentioned laptop models.
3. Whether the laptop model comes equipped with a __MUX switch.__

You can find the live and up-to-date version website at the official address: [https://canitmux.com](https://canitmux.com)

Before moving forward, you may find the following YouTube video by Jarrod'sTech helpful: [https://www.youtube.com/watch?v=6mWies_4oDs](https://www.youtube.com/watch?v=6mWies_4oDs)

[![Boost Laptop Gaming Performance by Disabling Optimus - MUX Switch Explained!](https://img.youtube.com/vi/6mWies_4oDs/0.jpg)](https://www.youtube.com/watch?v=6mWies_4oDs)

### What is a graphics switching technology?

In order to save battery in laptops with dedicated GPUs, their graphics card often features what is referred to as a "graphics switching technology" whose primary purpose is to intelligently switch between the integrated and dedicated GPU on an application-to-application basis.

Both NVIDIA and AMD have their own implementations of this technology. NVIDIA features two technologies: Optimus and Optimus Advanced. Similarly, ATI has a technology named AMD Switchable Graphics.

In theory, the goal of these technologies is to be invisible to the end-user and simply use the integrated graphics card as much as possible since it requires less power and will cause less demand on the battery. However, in practice, the devil is in the details.

### How do the graphics switching technologies work?

While both NVIDIA and AMD have their own implementations of the graphics switching technologies, they generally work in a very similar fashion.

The integrated GPU is wired directly to the display, and the dedicated GPU is actually wired to the integrated GPU. When you launch an application, it is up to the dedicated GPU's driver to determine which GPU that the rendering should take place on.

If the driver determines that the integrated graphics card should be used, then the integrated card handles both rendering and pushing the pixels to the display.

However, if the driver determines that the dedicated graphics card should be used, then the dedicated card handles the rendering but it does not (*usually*) push the pixels to the display. Instead, it copies the final image to be displayed into the integrated graphics card's memory and the integrated graphics card handles pushing the pixels to the display.

While the overhead of this is small, it is measurable and it can be undesirable when gaming or doing other high-performance workloads. For example, you may notice while gaming that you see a drop in FPS as a result.

Even worse, the mechanism that determines whether or not an application runs using the integrated GPU or dedicated GPU can be frustrating to debug. For example, the Windows operating system allows you to configure specific applications to use the high-performance graphics card, but any number of variables can cause this setting to be ignored:

1) Your power settings on your machine.
2) The application's affinity for certain rendering features.
3) Whether or not you are plugged into a power outlet or running on battery.

Similarly, it can be really hard to tell why exactly an application is running on the dedicated GPU rather than the integrated GPU.

### How do you fix this problem?

As mentioned above, many laptops that contain an integrated GPU and dedicated GPU are branded towards gamers. In many (but not all) cases, gamers are less concerned about battery and far more concerned with performance.

In a perfect world, these users would simply be able to completely cut their integrated graphics card out of the equation!

The good news is that many laptops feature a solution to this problem, in the form of what is called a "MUX Switch".

In the above section, it was mentioned that usually the display is wired directly to the integrated GPU and that the dedicated GPU was wired to the integrated GPU. This is still the case with laptops equipped with a MUX switch, but there is an additional wiring from the dedicated GPU directly to the display. Using some sort of toggle in the software (sometimes in the BIOS, other times in the control panel for the laptop manufacturer within the operating system), you can switch between "dynamic graphics" and "dedicated graphics only" modes (which effectively change which wiring is active to the display).

Unfortunately, not all laptops have this switch. And the reason that this website was created is because it is not super clear in the marketting materials for laptops whether or not they do feature it.

Even worse, historically some features simply do not work properly when using dynamic graphics switching (VSYNC comes to mind, although this may have been fixed in newer versions of the technology).

## Contributing

There are many ways to contribute! From providing up-to-date information about a laptop model to implementing new features, every little thing counts!

Please note that to contribute, you must agree to the licensing terms of the project. You can find more information about the MIT license here: [https://github.com/canitmux/canitmux/blob/main/LICENSE](https://github.com/canitmux/canitmux/blob/main/LICENSE)

### Providing Information & Reporting Issues

If you like to provide information about a laptop or submit a correction about an existing one, use the following link and select the most appropriate option: [https://github.com/canitmux/canitmux/issues/new/choose](https://github.com/canitmux/canitmux/issues/new/choose)

### Feature Requests

To request new features, please visit and create a discussion at the following link: [https://github.com/canitmux/canitmux/discussions](https://github.com/canitmux/canitmux/discussions)

Make sure to browse the discussions first, just incase your feature request has already been submitted. It may be helpful to reply in that thread rather than creating a new one.

### Pull Requests

Using the following link, you may submit pull requests to either add new features, fix bugs, or simply add new laptops to the database: [https://github.com/canitmux/canitmux/pulls](https://github.com/canitmux/canitmux/pulls)

The section below will help you get your development environment up and running.

Make sure that the build and linter has no errors locally before submitting a pull request, since those failures will need to be addressed first before your code can be merged.

## Development Environment Setup

To set up your local development environment, first start by forking and cloning the repository to your computer.

You will also need to install NodeJS to your machine. At the time of writing this, the website has been developed using NodeJS v18.7.0, but this is not a hard requirement. It is very likely that if you have an existing version installed then that will work fine.

Once you have done this, run the following commands inside the environment.

### Install Dependencies
```bash
npm install
```

### Run Linter
```bash
npm run lint
```

### Launch Website
```bash
npm run start
```

### Build Website & Database
```bash
npm run build
npm run build:db
```