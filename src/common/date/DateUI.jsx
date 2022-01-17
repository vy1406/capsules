import React, { useState } from 'react';
import './style.scss'
import { formatDate } from '../../utils/utils';

export default function DateUI({ date, label }) {
    return (
        <div className="dateUIWrap">
            {formatDate(date)}
        </div>
    );
}