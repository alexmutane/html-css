const grids = document.querySelectorAll('.grid');
const headings = document.querySelectorAll('.heading .wrapper .text');

function enterScreen(index) {
  const grid = grids[index]
  const heading = headings[index]
  const gridColumns = grid.querySelectorAll('.column')

  grid.classList.add('active')

  gridColumns.forEach(element => {
    element.classList.remove('animate-before', 'animate-after')
  });

  heading.classList.remove('animate-before', 'animate-after')
}

function leaveScreen(index, exitDelay) {
  const grid = grids[index]
  const heading = headings[index]
  const gridColumns = grid.querySelectorAll('.column')

  gridColumns.forEach(element => {
    element.classList.add('animate-after')
  });

  heading.classList.add('animate-after')

  setTimeout(() => {
    grid.classList.remove('active')
  }, exitDelay);
}

function setupAnimationCycle({ timePerscreen, exitDelay }) {
  const cycleTime = timePerscreen + exitDelay;
  let nextIndex = 0;

  function nextCycle() {
    const currentIndex = nextIndex
    enterScreen(currentIndex)

    setTimeout(() => {
      leaveScreen(currentIndex, exitDelay)
    }, timePerscreen);
    nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1;
  }

  nextCycle();


  setInterval(nextCycle, cycleTime);
}

setupAnimationCycle({
  timePerscreen: 2000,
  exitDelay: 200 * 7
});