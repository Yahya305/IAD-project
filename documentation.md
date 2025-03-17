# IAD Project Workflow Documentation

## Table of Contents
- [Overview](#overview)
- [Landing Page](#landing-page)
- [Student Workflow](#student-workflow)
- [Teacher Workflow](#teacher-workflow)
- [Key Features](#key-features)

## Overview
This application is designed for managing programming competitions and project-based assessments in an educational setting. It provides separate interfaces for students and teachers, with comprehensive features for project submission, grading, and performance tracking. Each competition can contain multiple challenges, allowing for diverse assessment opportunities and progressive skill development.

## Landing Page
The landing page serves as the entry point for both students and teachers:
- **Student Access**: "Login Now" button
- **Teacher Access**: "Teacher Login" button

## Student Workflow

### 1. Authentication
- **Login Options**:
  - Use existing credentials
  - Sign up for new account (email verification required)
- **Route**: `/student/login` or `/student/signup`

### 2. Dashboard Access
- **Main Route**: `/student/dashboard`
- Protected by student-role authentication middleware
- Personalized view of student's activities and progress
- Overview of all competitions and their associated challenges

### 3. Navigation Options

#### Main Dashboard
- View current challenges and competitions
  - See all challenges within each competition
  - Track progress across multiple challenges
- Access team information
- Monitor ongoing projects
- **Route**: `/student/dashboard`

#### Student Leaderboard
- Track personal progress
- View individual rankings
- Performance metrics across all challenges
- **Route**: `/student/std-progress`

#### Team Leaderboard
- Compare team performances
- View team rankings
- Aggregate scores from multiple challenges
- **Route**: `/student/team-leaderboard`

### 4. Project Submission
- **Features**:
  - One-time submission per challenge
  - Deadline-based submission system
  - Submit to multiple challenges within a competition
- **Required Information**:
  - Project title
  - Description
  - Project URL
- **Restrictions**:
  - Must submit before deadline
  - No multiple submissions allowed per challenge

## Teacher Workflow

### 1. Authentication
- Dedicated teacher login portal
- Uses admin authentication endpoint
- **Route**: `/teacher/login`

### 2. Dashboard Access
- **Main Route**: `/teacher/dashboard`
- Protected by instructor-role authentication middleware
- Comprehensive view of all activities
- Overview of all competitions and their challenges

### 3. Navigation Options

#### Main Dashboard
- **Features**:
  - Overview of all challenge submissions
  - Section-wise filtering
  - Submission status tracking
  - Track multiple challenges per competition
- **Route**: `/teacher/dashboard`

#### Challenge Creation
- **Features**:
  - Create new challenges within competitions
  - Set challenge parameters
  - Link challenges to specific competitions
- **Parameters**:
  - Project name
  - Description
  - Deadline
  - Team assignments
  - Competition selection
  - Challenge sequence in competition
- **Route**: `/teacher/challenge-entry`

#### Competition Creation
- Set up new competitions
- Define competition parameters
- Manage multiple challenges within each competition
- **Route**: `/teacher/competition-creation`

#### Team Leaderboard
- Monitor team performances
- Section-wise filtering
- Aggregate scores across multiple challenges
- **Route**: `/teacher/team-leaderboard`

#### Student Leaderboard
- Track individual progress
- Section-wise student filtering
- Performance tracking across all challenges
- **Route**: `/teacher/student-leaderboard`

### 4. Grading System
- **Route**: `/teacher/challenge-grading/:challengeId`
- **Features**:
  - View detailed submissions
  - Grade individual students (0-10 scale)
  - Submit team grades
  - Automatic grade normalization
- **Submission Details**:
  - Project title
  - Description
  - Project URL
  - Current scores
- **Process**:
  - Individual student grading
  - Team score calculation
  - Challenge status updates
  - Competition progress tracking

### 5. Section Management
- Filter data by sections (A, B)
- Manage section-wise:
  - Submissions
  - Grades
  - Performance tracking
  - Challenge completion status

## Key Features

### 1. Authentication & Authorization
- Role-based access control
- Separate student/teacher routes
- Token-based authentication
- Secure middleware protection

### 2. Real-time Updates
- React Query implementation
- Automatic data refreshing
- Real-time leaderboard updates
- Instant submission tracking
- Challenge status monitoring

### 3. Grading System
- Individual student assessment
- Team score normalization
- Automatic status updates
- Grade submission validation
- Aggregate scoring across challenges

### 4. Competition Management
- Challenge creation and tracking
- Multiple challenges per competition
- Progressive difficulty levels
- Deadline management
- Team assignment system
- Submission monitoring
- Competition-wide performance analytics

---

*Note: This documentation reflects the current state of the application and may be updated as new features are added or modified.*
