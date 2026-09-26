const views = {
  gallery: {
    file: 'gallery-info', height: 1129,
    alt: 'Louppe Gallery showing an apple-tree photograph, camera settings, a histogram, and RAW+JPEG information'
  },
  grid: {
    file: 'grid-overview', height: 1068,
    alt: 'Louppe Grid showing a real shoot of street scenes, architecture and reflections, with a photo selected in purple'
  }
};
const appImage = document.getElementById('app-image');
const imageLink = document.getElementById('image-link');
const imageDialog = document.getElementById('image-dialog');
const dialogImage = document.getElementById('dialog-image');
let currentView = 'gallery';

const imagePanel = document.getElementById('image-panel');
const demoPanel = document.getElementById('review-demo');
const demoVideo = demoPanel.querySelector('video');

function selectView(name) {
  const isDemo = name === 'demo';
  imagePanel.hidden = isDemo;
  demoPanel.hidden = !isDemo;
  if (!isDemo) {
    demoVideo.pause();
    currentView = name;
    const view = views[name];
    appImage.srcset = `media/2026-09-26/${view.file}-small.webp 960w, media/2026-09-26/${view.file}.webp 1800w`;
    appImage.src = `media/2026-09-26/${view.file}.webp`;
    appImage.alt = view.alt;
    appImage.height = view.height;
    imageLink.href = `media/2026-09-26/${view.file}.webp`;
    imageLink.setAttribute('aria-label', `Enlarge ${name === 'gallery' ? 'Gallery' : 'Grid'} screenshot`);
  }
  document.querySelectorAll('[data-view]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.view === name));
  });
}
document.querySelectorAll('[data-view]').forEach(button => {
  button.addEventListener('click', () => selectView(button.dataset.view));
});
function openLinkedDemo() {
  if (location.hash !== '#review-demo' && location.hash !== '#walkthrough') return;
  selectView('demo');
  demoPanel.scrollIntoView({ block: 'start' });
}
window.addEventListener('hashchange', openLinkedDemo);
openLinkedDemo();

function showImage() {
  const view = views[currentView];
  dialogImage.src = `media/2026-09-26/${view.file}.webp`;
  dialogImage.alt = view.alt;
  dialogImage.height = view.height;
  imageDialog.showModal();
}
imageLink.addEventListener('click', event => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  showImage();
});

const shortcuts = {
  f: 'mark a keeper and move to the next undecided item',
  d: 'mark a reject and move on. the file stays in place',
  space: 'play or pause video and audio',
  g: 'switch between Gallery and Grid'
};
const keyDescription = document.getElementById('key-description');
document.querySelectorAll('[data-key]').forEach(button => {
  button.addEventListener('click', () => {
    keyDescription.querySelector('p').textContent = shortcuts[button.dataset.key];
    document.querySelectorAll('[data-key]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  });
});

document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
});
