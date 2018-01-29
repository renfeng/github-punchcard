describe("github-punchcard", function() {

	var punchCard = new PunchCard();
	var self = this;

	beforeEach(function(done) {
		var user = "polymer";
		var repo = "polymer";
		punchCard.load(user, repo).then(function(table) {
			this.table = table;
			done();
		});
	});

	it("should be able to load", function(done) {
		expect(table.length).toBe(7);
		for (var row of table) {
			expect(row.length).toBe(24);
		}
		done();
	});
});
