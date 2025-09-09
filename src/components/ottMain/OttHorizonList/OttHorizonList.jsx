import React from 'react';
import { booksData } from '../../../api/ottData01';
import OttSection from './OttSection';
import './style.scss';

const OttHorizonList = () => {
    return (
        <div className="ListWrap">
            <div className="inner">
                <main>
                    <OttSection title="Reading" books={booksData.reading} />
                    <OttSection title="Completed" books={booksData.completed} />
                    <OttSection title="Planning" books={booksData.planning} />
                    <OttSection title="Planning" books={booksData.planning} />
                </main>
            </div>
        </div>
    );
};

export default OttHorizonList;
