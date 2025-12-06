        const track = document.getElementById('cardsTrack');
        const cards = document.querySelectorAll('.card');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        let currentIndex = 0;
        const cardWidth = 244; 
        const visibleCards = 3;
        const maxIndex = cards.length - 1; 

        function updateSlider() {
            const offset = -currentIndex * cardWidth;
            track.style.transform = `translateX(${offset}px)`;
            
           
            cards.forEach((card, index) => {
                card.classList.remove('featured');
                if (index === currentIndex) {
                    card.classList.add('featured');
                }
            });

          
            prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
            prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
            nextBtn.style.opacity = currentIndex === maxIndex ? '0.5' : '1';
            nextBtn.style.cursor = currentIndex === maxIndex ? 'not-allowed' : 'pointer';
        }

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateSlider();
            }
        });

    
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlider();
                }
            } else if (e.key === 'ArrowRight') {
                if (currentIndex < maxIndex) {
                    currentIndex++;
                    updateSlider();
                }
            }
        });

       
        updateSlider();