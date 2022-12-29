import React from 'react';

const TrainingIcon = () =>
{
    return (
        <svg
            width={ 24 }
            height={ 24 }
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"

        >
            <path fill="url(#a)" d="M0 0h24v24H0z" />
            <defs>
                <pattern
                    id="a"
                    patternContentUnits="objectBoundingBox"
                    width={ 1 }
                    height={ 1 }
                >
                    <use xlinkHref="#b" transform="scale(.01)" />
                </pattern>
                <image
                    id="b"
                    width={ 100 }
                    height={ 100 }
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>

    );
}

export default TrainingIcon;
