import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './App.css'
import profileImg from './assets/photo.png'
import { QRCodeSVG } from 'qrcode.react'

function App() {
  const name = '임현성'
  const studentId = '20250158'
  const department = '멀티미디어학과 - 학생'
  const goal = '사용하기 편하고 보기 좋은 웹 화면 만들기'

  const qrData =
    '이름: ' + name + '\n학번: ' + studentId + '\n학과: ' + department

  const navigate = useNavigate()
  console.log(qrData)

  // 로그인 여부 가져오기
  const isLogin = localStorage.getItem('isLogin')

  // 로그인 여부 확인
  useEffect(() => {
    if (isLogin !== 'true') {
      navigate('/')
    }
  }, [isLogin, navigate])

  // 로그아웃 함수
  const handleLogout = () => {
    localStorage.removeItem('isLogin')
    navigate('/')
  }

  if (isLogin !== 'true') {
    return null
  }

  return (
    <main className="page">
      <section className="profile-card">
        <span className="status">LIVE</span>

        <img
          src={profileImg}
          alt="프로필 사진"
          className="avatar-img"
        />

        <p className="eyebrow">HELLO REACT</p>

        <h1>{name}</h1>

        <p className="department">{department}</p>

        <p className="student-id">
          학번: {studentId}
        </p>

        <div className="divider"></div>

        <p className="goal">
          목표: {goal}
        </p>

        <div className="tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

        <div className="qr-area">
          <QRCodeSVG
            value={qrData}
            size={150}
          />
          <p>학생 QR</p>
        </div>

        <button onClick={() => navigate('/grade')}>
          성적 보기
        </button>

        <div style={{ height: '15px' }}></div>

        <button onClick={handleLogout}>
          로그아웃
        </button>

      </section>
    </main>
  )
}

export default App