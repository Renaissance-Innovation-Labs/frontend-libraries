# Image Slider Website README

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Configuration](#configuration)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction
Welcome to the Image Slider Website! This website provides a seamless and elegant way to display a collection of images in a slider format. Ideal for portfolios, galleries, and showcases, this image slider is designed to be responsive and user-friendly.

## Features
- **Responsive Design:** Works on all device sizes from mobile to desktop.
- **Easy Navigation:** Includes next and previous buttons for easy image browsing.
- **Autoplay:** Automatically transitions between images with adjustable timing.
- **Customizable:** Easily change the slider settings and styles to fit your needs.

## Installation
To set up the Image Slider Website, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/DavidAroh/frontend-libraries.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd experiments
    cd image-slider
    ```

3. **Open `index.html` in your preferred web browser:**
    ```bash
    open index.html
    ```

## Usage
The Image Slider Website is straightforward to use. After installation, you can add your images to the slider by placing them in the `image` directory and updating the image paths in `index.html`.

### Adding Images
1. Place your image files in the `image` directory.
2. Open `index.html` and locate the image slider section:
    ```html
    <div class="carousel">
        <!-- list item -->
        <div class="list">
            <div class="item">
                <img src="image/image1.jpg" alt="Image 1">
                <!-- Add more images here -->
            </div>
        </div>
        <!-- list thumnail -->
        <div class="thumbnail">
             <div class="item">
                <img src="image/image1.jpg" alt="Image 1">
                <!-- Add more images here -->
            </div>
        </div>
    </div>
    ```
3. Add or remove `<img>` tags as needed, ensuring the `src` attribute points to the correct file paths.

## Configuration
You can customize the behavior of the image slider by modifying the JavaScript settings in `app.js`.

### Example Configuration
In `app.js`, you can adjust the following settings:
```javascript
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 10000;
```
More explanation in the `app.js`

## Contributing
We welcome contributions to enhance the Image Slider Website. To contribute, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Make your changes and commit them:**
    ```bash
    git commit -m "Add your feature"
    ```
4. **Push to the branch:**
    ```bash
    git push origin feature/your-feature-name
    ```
5. **Create a pull request.**

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
Design by LUNDEV on YouTube

---
Thank you for using the Image Slider Website! If you have any questions or need further assistance, please feel free to contact us.