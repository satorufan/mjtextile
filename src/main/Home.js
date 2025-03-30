import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import img1 from './img/home/lalit-kumar-uDoezY1cPLY-unsplash.jpg';
import img2 from './img/home/fabric-5259683_1280.jpg';
import img3 from './img/home/kevin-limbri-wPzxDaQm8fE-unsplash.jpg';

const slogans = [
    {
        txt: <div>The Best in Textile <br/> Myungjin Textile</div>,
        img: img1
    },
    {
        txt: <div>Quality You Can Trust <br/> Myungjin Textile</div>,
        img: img2
    },
    {
        txt: <div>Innovation in Every Thread <br/> Myungjin Textile</div>,
        img: img3
    }
];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef(null);
    const interval = 200;
    const isProgressing = useRef(false); // useRef를 사용하여 중복 호출 방지
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);  // 버튼 비활성화 상태 추가
    

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slogans.length);
        resetTimer();
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slogans.length - 1 : prevIndex - 1));
        resetTimer();
    };

    const resetTimer = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setProgress(0);  // progress를 0으로 리셋
        setTimeout(() => {
            isProgressing.current = false;  // 타이머가 리셋되면 다시 진행 가능하게 설정
            startTimer();  // 새 타이머 시작
        }, 0);  // setTimeout을 사용하여 비동기적으로 상태 리셋 후 nextSlide()
    };

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + 1;
                if (newProgress >= interval && !isProgressing.current) {
                    isProgressing.current = true;
                    nextSlide();
                    return 0;
                }
                return newProgress;
            });
        }, 50);
    };

    const handleButtonClick = (direction) => {
        // 버튼 클릭 시 비활성화
        setIsButtonDisabled(true);

        // 0.5초 후에 버튼 다시 활성화
        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 1200);

        // 방향에 따라 슬라이드 변경
        if (direction === 'next') {
            nextSlide();
        } else {
            prevSlide();
        }
    };
    
    useEffect(() => {
        startTimer();
    }, []);

    return (
        <div className="main-home">
            <div className="carousel">
                {slogans.map((slogan, idx) => (
                    <div
                        key={idx}
                        className={`slide ${idx === currentIndex ? 'active' : ''}`}
                        style={{
                            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slogan.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            opacity: idx === currentIndex ? 1 : 0,
                            transition: 'opacity 1.5s ease-in-out'
                        }}
                    >
                        <div className={`home-slogan${idx} ${idx === currentIndex ? '' : 'hidden'}`}>
                            {slogan.txt}
                        </div>
                    </div>
                ))}
                <button
                    className="prev"
                    onClick={(e) => { e.stopPropagation(); handleButtonClick('prev'); }}
                    disabled={isButtonDisabled}  // 버튼 비활성화 상태
                >
                    &#10094;
                </button>
                <button
                    className="next"
                    onClick={(e) => { e.stopPropagation(); handleButtonClick('next'); }}
                    disabled={isButtonDisabled}  // 버튼 비활성화 상태
                >
                    &#10095;
                </button>
            </div>
            <div className="slide-timer" style={{ width: '100%', height: '4px', backgroundColor: 'gray', position: 'relative' }}>
                <div style={{
                    width: `${(progress / interval) * 100 + 5}%`,
                    height: '100%',
                    backgroundColor: 'black',
                    position: 'absolute',
                    transition: 'width 100ms linear',
                }}></div>
            </div>
        </div>
    );
}

export default Home;
