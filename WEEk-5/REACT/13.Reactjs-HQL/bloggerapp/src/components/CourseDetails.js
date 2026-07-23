import React, { useState } from 'react';

const courses = [
  { id: 1, title: 'React for Beginners', instructor: 'Tyler McGinnis', level: 'Beginner', enrolled: true, price: 0, duration: '10h' },
  { id: 2, title: 'Advanced JavaScript', instructor: 'Wes Bos', level: 'Advanced', enrolled: false, price: 29, duration: '20h' },
  { id: 3, title: 'Python Bootcamp', instructor: 'Jose Portilla', level: 'Beginner', enrolled: true, price: 0, duration: '15h' },
  { id: 4, title: 'Machine Learning A-Z', instructor: 'Kirill Eremenko', level: 'Intermediate', enrolled: false, price: 49, duration: '40h' },
  { id: 5, title: 'UI/UX Design Mastery', instructor: 'Gary Simon', level: 'Intermediate', enrolled: true, price: 0, duration: '12h' },
];

// WAY 8: Helper function with early return
function LevelBadge({ level }) {
  if (level === 'Beginner') return <span className="badge" style={{ background: '#e3fff0', color: '#0a7a4f' }}>🌱 Beginner</span>;
  if (level === 'Intermediate') return <span className="badge" style={{ background: '#fff8e3', color: '#c77700' }}>🔥 Intermediate</span>;
  if (level === 'Advanced') return <span className="badge" style={{ background: '#ffe3e3', color: '#c0392b' }}>🚀 Advanced</span>;
  return <span className="badge">{level}</span>; // default fallback
}

function CourseDetails() {
  const [filterLevel, setFilterLevel] = useState('All');
  const [showEnrolledOnly, setShowEnrolledOnly] = useState(false);
  const [enrolledCourseId, setEnrolledCourseId] = useState(null);

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // WAY 2: if/else for level filtering
  let displayedCourses = courses;
  if (filterLevel !== 'All') {
    displayedCourses = displayedCourses.filter(c => c.level === filterLevel);
  }

  // WAY 4: Ternary for enrolled filter
  displayedCourses = showEnrolledOnly
    ? displayedCourses.filter(c => c.enrolled)
    : displayedCourses;

  const handleEnroll = (id) => setEnrolledCourseId(id);

  return (
    <div className="component-container">
      <h2 className="component-title">🎓 Course Details</h2>
      <p className="component-subtitle">Explore and enroll in top-rated courses.</p>

      {/* WAY 3: && operator - Show success notification */}
      {enrolledCourseId && (
        <div className="alert alert-success">
          🎉 You have successfully enrolled in <strong>{courses.find(c => c.id === enrolledCourseId)?.title}</strong>!
        </div>
      )}

      <div className="controls">
        <button
          className={`toggle-btn ${showEnrolledOnly ? 'selected' : ''}`}
          onClick={() => setShowEnrolledOnly(!showEnrolledOnly)}
        >
          {/* WAY 4: Ternary in button text */}
          {showEnrolledOnly ? '✅ Enrolled Only' : '📋 All Courses'}
        </button>
        {levels.map(lvl => (
          <button
            key={lvl}
            className={`toggle-btn ${filterLevel === lvl ? 'selected' : ''}`}
            onClick={() => setFilterLevel(lvl)}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* WAY 4: Ternary for empty state vs card grid */}
      {displayedCourses.length === 0 ? (
        <div className="alert alert-warning">😕 No courses match the selected filters.</div>
      ) : (
        <div className="card-grid">
          {displayedCourses.map(course => (
            <div key={course.id} className="card card-course">
              <h3>{course.title}</h3>
              <p>👨‍🏫 {course.instructor}</p>
              <p>⏱ Duration: {course.duration}</p>

              {/* WAY 8: Helper function with early return */}
              <LevelBadge level={course.level} />

              {/* WAY 4: Ternary for price */}
              <span className="badge">
                {course.price === 0 ? '🆓 Free' : `💰 $${course.price}`}
              </span>

              {/* WAY 3: && to show "Already Enrolled" badge */}
              {course.enrolled && (
                <span className="badge" style={{ background: '#e3f0ff', color: '#1a5fff' }}>📌 Enrolled</span>
              )}

              {/* WAY 4: Ternary for enroll button vs enrolled message */}
              {course.enrolled ? (
                <p style={{ marginTop: '10px', color: 'green', fontWeight: 'bold' }}>✔ You are enrolled</p>
              ) : (
                <button
                  className="toggle-btn"
                  style={{ marginTop: '10px' }}
                  onClick={() => handleEnroll(course.id)}
                >
                  Enroll Now
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* WAY 5: IIFE - Enrollment Summary */}
      <div className="section-label">Enrollment Summary (IIFE - Way 5)</div>
      {(() => {
        const totalEnrolled = courses.filter(c => c.enrolled).length;
        const freeCourses = courses.filter(c => c.price === 0).length;
        return (
          <div className="alert alert-info">
            📈 Enrolled in <strong>{totalEnrolled}</strong> of <strong>{courses.length}</strong> courses | 
            🆓 <strong>{freeCourses}</strong> free course(s) available
          </div>
        );
      })()}
    </div>
  );
}

export default CourseDetails;
