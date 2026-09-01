import cv from '../public/cv.json';

function ProfileLinks({ className = '', linkClassName = 'text-accent-lightBlue hover:underline' }) {
  const profiles = cv.basics.profiles || [];

  if (profiles.length === 0) return null;

  return (
    <nav className={className} aria-label="Profiles">
      {profiles.map((profile, index) => (
        <span key={`${profile.network}-${profile.url}`}>
          {index > 0 && <span className="mx-2" aria-hidden="true">|</span>}
          <a
            href={profile.url}
            className={linkClassName}
            rel="me noopener noreferrer"
            target="_blank"
          >
            {profile.network}
          </a>
        </span>
      ))}
    </nav>
  );
}

export default ProfileLinks;
