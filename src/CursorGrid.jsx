import { useState, useEffect, useRef, useCallback } from 'react';

export default function CursorGrid({ isDarkMode = true }) {
    const [hoveredBox, setHoveredBox] = useState(null);
    const [dimensions, setDimensions] = useState({ cols: 0, rows: 8, boxSize: 40 });
    const containerRef = useRef(null);

    const maxRows = 8;
    const targetColumns = { desktop: 25, tablet: 20, mobile: 15 };

    const calculateColumns = useCallback((containerWidth) => {
        if (containerWidth >= 1024) {
            return targetColumns.desktop;
        } else if (containerWidth >= 768) {
            return targetColumns.tablet;
        } else {
            return targetColumns.mobile;
        }
    }, [targetColumns.desktop, targetColumns.tablet, targetColumns.mobile]);

    const calculateBoxSize = (containerWidth, cols) => {
        return containerWidth / cols;
    };

    useEffect(() => {
        let resizeTimeout;

        const updateDimensions = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                const cols = calculateColumns(width);
                const boxSize = calculateBoxSize(width, cols);
                setDimensions({
                    cols: cols,
                    rows: maxRows,
                    boxSize: boxSize
                });
            }
        };

        const debouncedUpdate = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(updateDimensions, 150);
        };

        updateDimensions();
        window.addEventListener('resize', debouncedUpdate);
        return () => {
            window.removeEventListener('resize', debouncedUpdate);
            clearTimeout(resizeTimeout);
        };
    }, [calculateColumns]);

    // Global mouse tracking
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Check if mouse is within the grid
            if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
                setHoveredBox(null);
                return;
            }

            // Calculate which box is hovered
            const col = Math.floor(x / dimensions.boxSize);
            const row = Math.floor(y / dimensions.boxSize);

            if (col >= 0 && col < dimensions.cols && row >= 0 && row < dimensions.rows) {
                setHoveredBox(`${row}-${col}`);
            } else {
                setHoveredBox(null);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [dimensions]);

    const getRandomPastelColor = (id, opacity) => {
        let h = 2166136261;
        for (let i = 0; i < id.length; i++) {
            h ^= id.charCodeAt(i);
            h = Math.imul(h, 16777619);
        }
        let s = h >>> 0;
        const rand = () => {
            s = (Math.imul(1664525, s) + 1013904223) >>> 0;
            return s / 0x100000000;
        };

        const hue = Math.floor(rand() * 360);
        const saturation = 40 + rand() * 20;
        const lightness = isDarkMode ? (50 + rand() * 15) : (65 + rand() * 15);

        return `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
    };

    const boxes = [];
    for (let row = 0; row < dimensions.rows; row++) {
        for (let colIndex = 0; colIndex < dimensions.cols; colIndex++) {
            boxes.push({ row, col: colIndex, id: `${row}-${colIndex}` });
        }
    }

    const getOpacity = (row) => {
        // row 0 (top) = 0% opacity (fully transparent)
        // row 7 (bottom) = 50% opacity (half opaque)
        return (row / (maxRows - 1)) * 0.5;
    };

    const bgColorRgb = isDarkMode ? '24, 24, 27' : '255, 255, 255';
    const borderColorRgb = isDarkMode ? '63, 63, 70' : '229, 231, 235';

    return (
        <div
            ref={containerRef}
            className="w-full overflow-hidden fixed bottom-0 left-0 right-0 pointer-events-none -z-10"
            style={{
                backgroundColor: 'transparent',
                height: `${maxRows * dimensions.boxSize}px`
            }}
        >
            <div
                className="grid"
                style={{
                    gridTemplateColumns: `repeat(${dimensions.cols}, 1fr)`,
                    gridTemplateRows: `repeat(${dimensions.rows}, ${dimensions.boxSize}px)`,
                }}
            >
                {boxes.map(({ row, id }) => {
                    const isHovered = hoveredBox === id;
                    const opacity = getOpacity(row);
                    const pastelColor = getRandomPastelColor(id, opacity);

                    return (
                        <div
                            key={id}
                            className="transition-all duration-300 ease-out"
                            style={{
                                height: `${dimensions.boxSize}px`,
                                backgroundColor: isHovered ? pastelColor : `rgba(${bgColorRgb}, ${opacity})`,
                                boxShadow: isHovered
                                    ? `0 0 15px ${pastelColor}, inset 0 0 15px ${pastelColor}`
                                    : 'none',
                                border: `1px solid rgba(${borderColorRgb}, ${opacity})`
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}