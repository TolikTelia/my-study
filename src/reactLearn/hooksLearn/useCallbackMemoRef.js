import React from 'react';

const UseCallbackMemoRef = () => {
    return (
        <div>
            <p>useCallback щоб фунція кожен раз заново не об'являти</p>
            <p>useMemo не перерендерює комп якщо пропси не змінюються
                або ж можна передати масив зі змінними, щоб від них залежив ререндер, ну як в useEffect-i
            </p>
            <p>
                а useRef ти знаєш на практиці
            </p>
        </div>
    );
};

export default UseCallbackMemoRef;