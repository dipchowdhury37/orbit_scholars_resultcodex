// Replace photo paths, names, and qualification lists with approved teacher details.
// Photos belong in public/teachers; use their browser paths, e.g. /teachers/name.jpg.
export const teachers = [
  { subject: 'Mathematics', color: '#a9c3b0' },
  { subject: 'Physics', color: '#a8bed1' },
  { subject: 'Chemistry', color: '#c5b6d3' },
  { subject: 'Biology', color: '#aabd99' },
  { subject: 'English', color: '#d7baa5' },
  { subject: 'Bangla', color: '#bdada8' },
  { subject: 'Higher Secondary', color: '#c7c1a0' },
].map((teacher, index) => ({
  ...teacher,
  id: `teacher-${index + 1}`,
  name: `Teacher ${index + 1} · profile coming soon`,
  qualifications: ['Verified qualifications will be added before launch.'],
  photo: `/teachers/placeholder-${index + 1}.svg`,
  placeholder: true,
}));
