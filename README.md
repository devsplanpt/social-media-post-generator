### Social Media Post Generator

## Architechure

--> We will use on Server side Lambda Functions (Netlify)

## Implementation Details

- The service will accept a theme option which allows to choose between light and dark

  - theme: 'light' | 'dark'

- The service allows images to be configured with the following properties:

  - Title: string;
  - Caption: string;
  - Author: 'pedro' | 'petinga' | 'lota';
  - Image: string;

- the service will store the base resources
- The service will return a zip containing the images
