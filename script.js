const slider = document.querySelectorAll('.slider-box');
const nextSlide = document.querySelector('.next-btn');
const prevSlide = document.querySelector('.prev-btn');
const slideDot = document.querySelectorAll('.slider-dot');
let transX = 0;

function sliderNext() {
    transX += 100;

    if (transX >= slider.length * 100 - 100) {
        transX = slider.length * 100 - 100;
        nextSlide.style.display = 'none';
        nextSlide.parentElement.parentElement.classList.add('go-top');
    } else if (transX == 100) {
        prevSlide.style.display = 'inline-block';
    };

    slider.forEach(box => {
        box.style.transform = 'translateX(-' + transX + '%)';
    });
    slideDot.forEach(dot => {
        dot.classList.remove('current');
        slideDot[transX / 100].classList.add('current');
    });
}

nextSlide.addEventListener('click', sliderNext, false);

const video = document.querySelector('video');
video.addEventListener(
    'click', function () {
        nextSlide.parentElement.parentElement.classList.add('dark');
    }
)

prevSlide.addEventListener(
    'click', function () {
        transX -= 100;

        if (transX < 100) {
            prevSlide.style.display = 'none';
        }

        nextSlide.style.display = 'inline-block';
        nextSlide.parentElement.parentElement.classList.remove('go-top');
        nextSlide.parentElement.parentElement.classList.remove('dark');
        slider.forEach(box => {
            box.style.transform = 'translateX(-' + transX + '%)';
        });
        slideDot.forEach(dot => {
            dot.classList.remove('current');
            slideDot[transX / 100].classList.add('current');
        });
    }
);

const faq = document.querySelectorAll('.faq-box');
faq.forEach(box => {
    box.addEventListener(
        'click', function () {
            const nowAnswered = document.querySelector('.faq-answer.answered');
            if (nowAnswered != undefined) {
                nowAnswered.classList.remove('answered');
                if (nowAnswered.parentElement == box) {
                    box.firstElementChild.classList.remove('answered');
                } else {
                    box.firstElementChild.classList.add('answered');
                };
            } else {
                box.firstElementChild.classList.add('answered');
            }
        }
    )
});

const nav = document.querySelector('nav');
const toggleBtn = document.querySelector('.toggle-nav');
const navLink = document.querySelectorAll('.nav-link a');
toggleBtn.addEventListener(
    'click', function () {
        nav.classList.toggle('collapsed');
    }
)
navLink.forEach(anchor => {
    anchor.addEventListener(
        'click', function () {
            const anchorAct = document.querySelector('.nav-link a.anchor-active');
            if (anchorAct != undefined) {
                anchorAct.classList.remove('anchor-active');
            };
            anchor.classList.add('anchor-active');
            nav.classList.remove('collapsed');
        }
    )
});

const chooseLicense = document.querySelectorAll('.duration-col');
let priceById = [65, 82.5, 75];
chooseLicense.forEach(time => {
    time.addEventListener(
        'click', function () {
            const oldLicense = document.querySelector('.duration-col.choosen');
            const nowLicense = time.querySelector('.fixed-license').textContent;

            oldLicense.classList.remove('choosen');
            time.classList.add('choosen');

            const displayLicense = document.querySelectorAll('.now-license');
            displayLicense.forEach(license => {
                license.textContent = nowLicense;
            });

            const priceBox = document.querySelectorAll('.price-by-time');
            for (let i = 0; i < priceBox.length; i++) {
                if (nowLicense == '3') {
                    priceBox[i].textContent = priceById[i] * 3.2;
                } else {
                    priceBox[i].textContent = priceById[i];
                };
            };
        }
    )
});