import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

interface TimerProps {}

const Timer: React.FC<TimerProps> = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(25 * 60);
  const [currentSeconds, setCurrentSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Actualizar el tiempo total cuando cambian los inputs
  useEffect(() => {
    if (!isRunning && currentSeconds === totalSeconds) {
      const total = hours * 3600 + minutes * 60 + seconds;
      setTotalSeconds(total);
      setCurrentSeconds(total);
      setIsFinished(false);
    }
  }, [hours, minutes, seconds, isRunning, currentSeconds, totalSeconds]);

  // Manejar el countdown
  useEffect(() => {
    if (isRunning && currentSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentSeconds(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, currentSeconds]);

  const formatTime = (timeInSeconds: number): string => {
    const h = Math.floor(timeInSeconds / 3600);
    const m = Math.floor((timeInSeconds % 3600) / 60);
    const s = timeInSeconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handlePlay = () => {
    if (totalSeconds > 0) {
      setIsRunning(true);
      setIsFinished(false);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentSeconds(totalSeconds);
    setIsFinished(false);
  };

  const handleRestart = () => {
    setIsRunning(false);
    setCurrentSeconds(totalSeconds);
    setIsFinished(false);
    setTimeout(() => setIsRunning(true), 100);
  };

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(23, parseInt(e.target.value) || 0));
    setHours(value);
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(59, parseInt(e.target.value) || 0));
    setMinutes(value);
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(59, parseInt(e.target.value) || 0));
    setSeconds(value);
  };

  return (
    <div className="timer-container">
      {/* Input para establecer el tiempo */}
      {!isRunning && !isFinished && currentSeconds === totalSeconds && (
        <div className="timer-input">
          <input
            type="number"
            min="0"
            max="23"
            value={hours}
            onChange={handleHoursChange}
            className="time-input"
          />
          <span className="time-label">h</span>
          
          <input
            type="number"
            min="0"
            max="59"
            value={minutes}
            onChange={handleMinutesChange}
            className="time-input"
          />
          <span className="time-label">m</span>
          
          <input
            type="number"
            min="0"
            max="59"
            value={seconds}
            onChange={handleSecondsChange}
            className="time-input"
          />
          <span className="time-label">s</span>
        </div>
      )}

      {/* Display del temporizador */}
      <div className={`timer-display ${isFinished ? 'finished' : ''}`}>
        {formatTime(currentSeconds)}
      </div>

      {/* Controles */}
      <div className="controls">
        {!isRunning ? (
          <button 
            className="control-btn primary" 
            onClick={handlePlay}
            disabled={totalSeconds === 0}
          >
            {currentSeconds === totalSeconds ? '▶️ Play' : '▶️ Resume'}
          </button>
        ) : (
          <button className="control-btn" onClick={handlePause}>
            ⏸️ Pause
          </button>
        )}
        
        <button className="control-btn" onClick={handleReset}>
          🔄 Reset
        </button>
        
        {(isRunning || currentSeconds !== totalSeconds) && (
          <button className="control-btn danger" onClick={handleRestart}>
            ⏮️ Restart
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
