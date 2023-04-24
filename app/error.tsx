'use client';

import React, {useEffect} from 'react'
import EmptyState from './components/EmptyState';

type ErrorStateProps = {
    error: Error
}

const ErrorState = ({ error }: ErrorStateProps) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
        <EmptyState 
        title='There is an Error'
        subtitle='Universe is ontologically incomplete!'
        />
    </div>
  )
}

export default ErrorState