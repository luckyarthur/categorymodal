# here are all the issues I find on gumroad category feature
to reproduce the issue, you need to reduce the home page width into smaller size like the snap below, just tap on the top right button, you will see the modal.
<img width="886" alt="image" src="https://github.com/user-attachments/assets/67647ca9-ffcf-49d9-a8c2-7afab626355b">

## issues

1. the X button is black which is not good to find it, it should be white color in light theme:
<img width="890" alt="image" src="https://github.com/user-attachments/assets/0a575ec4-fd02-4075-940e-16ca1596e6c4">

2. the grey area doesn't support click event to dismiss the modal.

3. the keyboard navigation with 'tab' key select the component behind the modal(you can see the blue rectangle with the focus at the left arrow behind), which should only focus inside the Modal.
<img width="878" alt="image" src="https://github.com/user-attachments/assets/e2e58079-e1d4-4b90-9f54-0531d1c74836">

## more improvements
1. when show this modal on small screen like mobile phone, the modal should oocupy the whole screen to offer a better user experience.
2. using createPortal function and pass 'document.body' as the parameter to ensure that the modal component will always show up at the top level, which is easier and better than using the z-index.
3. using an animation to slide in the modal when presenting it is a better user experience.

## things to know
I use both javascript and typescript to make this example to show how the modal should behave, so I just make a simple Category to show its functionality, if you need to use it like a fully coded category, just update the 'subListDic' inside the constants file with key-value pairs in it, the 'key' is the menu item name and 'value' is an Array that contains the subitems, very easy to set up.

if you just want to use the modal to present your own content, use the ModalContainer component to do it.

## ToDo
abstract the ModalContainer to be a reusable component for more scenarios


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
