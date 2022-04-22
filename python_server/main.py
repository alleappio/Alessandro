from flask import Flask

app=Flask(__name__, static_folder="/home/pi/sitomio/frontend/build", static_url_path="/")

@app.route("/")
def main():
	return app.send_static_file("index.html")
	
app.run(host="0.0.0.0", port=8080)
