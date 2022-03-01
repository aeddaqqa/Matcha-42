
CREATE TABLE  IF NOT EXISTS users (
	id INT AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(255) unique NOT NULL,
	username VARCHAR(255) unique NOT NULL,
	lastName VARCHAR(255),
	firstName VARCHAR(255),
	password VARCHAR(255),
    gender VARCHAR(255),
    sexualPreference VARCHAR(255),
	biography VARCHAR(255),
	birthdate VARCHAR(255),
	profilePicture VARCHAR(255),
	locationLat INT,
	locationLng INT,
	complete INT DEFAULT(0)
);

CREATE TABLE  IF NOT EXISTS images (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
	user_id INT,
	FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE  IF NOT EXISTS tags (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255),
	user_id INT,
	FOREIGN KEY (user_id) REFERENCES users(id)
);