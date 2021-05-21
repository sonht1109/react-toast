import React from 'react'
import { useSelector } from 'react-redux'
import Notification from './Notification'
import './styles.css'

export default function ListNotifications() {

  const notifications = useSelector(state => state.notifications)

  return (
    <div className="notification-container">
      {notifications.map((n) => (
        <Notification n={n} key={n.id} />
      ))}
    </div>
  )
}
