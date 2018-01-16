function PunchCard() {

	var self = this;

	this.load = function(user, repo) {
		/*
		 * https://developer.github.com/v3/repos/statistics/#get-the-number-of-commits-per-hour-in-each-day
		 */
		return fetch("https://api.github.com/repos/" + user + "/" + repo + "/stats/punch_card").then(function(response) {
			if (response.status === 200 || response.status === 0) {
				return Promise.resolve(response.json());
			} else {
				return Promise.reject(response.status + " (" + response.statusText + ")");
			}
		}).then(function(json) {
			console.log(json);
			var table = [
				[],
				[],
				[],
				[],
				[],
				[],
				[],
			];
			for (var c of json) {
				table[c[0]][c[1]] = c[2];
			}
			return Promise.resolve(table);
		}).catch(function(error) {
			if (error instanceof TypeError) {
				return Promise.reject(error.stack);
			} else {
				return Promise.reject(error);
			}
		});
	}
}