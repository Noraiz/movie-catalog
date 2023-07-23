"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Movie = void 0;
var movie_review_entity_1 = require("src/movie-review/entities/movie-review.entity");
var typeorm_1 = require("typeorm");
var Movie = /** @class */ (function () {
    function Movie() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Movie.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Movie.prototype, "title");
    __decorate([
        (0, typeorm_1.Column)()
    ], Movie.prototype, "description");
    __decorate([
        (0, typeorm_1.Column)()
    ], Movie.prototype, "director");
    __decorate([
        (0, typeorm_1.Column)()
    ], Movie.prototype, "releaseDate");
    __decorate([
        (0, typeorm_1.Column)()
    ], Movie.prototype, "ticketPrice");
    __decorate([
        (0, typeorm_1.Column)()
    ], Movie.prototype, "country");
    __decorate([
        (0, typeorm_1.Column)()
    ], Movie.prototype, "genre");
    __decorate([
        (0, typeorm_1.Column)()
    ], Movie.prototype, "photo");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return movie_review_entity_1.MovieReview; }, function (movieReview) { return movieReview.movie; })
    ], Movie.prototype, "movieReviews");
    Movie = __decorate([
        (0, typeorm_1.Entity)()
    ], Movie);
    return Movie;
}());
exports.Movie = Movie;
