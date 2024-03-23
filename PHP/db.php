<?php

class Db {

	private $db = null;
	private $result = null;


	public function __construct($host, $user, $password, $base, $port = null, $charset = 'utf8') {

		$mysqli = $this->db = new mysqli($host, $user, $password, $base, $port);

		if ($this->db->connect_error) {
			die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
		}

		$this->db->set_charset($charset);

	}

	public function insert($data) {

		$dates = time();

		if ($data["name"] !="") {
			$name = htmlspecialchars(stripslashes($data["name"]));
		} else {
			$name = "Нет имени";
		}

		$tel = htmlspecialchars(stripslashes($data["tel"]));

		switch ($data["city"]) {
			case "СПБ":  $city_id = 139; break;
			default: $city_id = 0;
		}
		
		if ($data["txt"] !="") {
			$message = htmlspecialchars(stripslashes($data["txt"]));
		} else {
			$message = "";
		}

		$subject = $data["type"] . " (" . $data["names"] . ")";

		$this->db->query("INSERT INTO `xifm_orders` (`date`, `name`, `tel`, `city_id`, `subject`, `message`) VALUES ('$dates', '$name', '$tel', ' $city_id', '$subject', '$txt')");

		//if ($this->db->errno) echo ("mysqli error #".$this->db->errno.": ".$this->db->error);

		$this->db->close();

	}

}

?>