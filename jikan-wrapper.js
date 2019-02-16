let Request = require('./lib/Request')

class JikanNode {

    constructor() {
        this.request = new Request
    }

    /**
     * 
     * @param {integer} id anime ID
     * @param {string} request character_staff, episodes, news, pictures, videos, stats, forum, moreinfo, reviews, recommendations, userupdates
     * @param {integer} param can be used to select pages when needed
     */
    async findAnime(id, request, param) {
        return await this.request.send(['anime', id, request, param])
    }

    /**
     * 
     * @param {integer} id manga ID 
     * @param {string} request characters, news, pictures, stats, forum, moreinfo, reviews, recommendations, userupdates 
     * @param {integer} param can be used to select pages when needed 
     */
    async findManga(id, request, param) {
        return await this.request.send(['manga', id, request, param])
    }

    /**
     * 
     * @param {integer} id person ID
     * @param {string} request pictures
     */
    async findPerson(id, request) {
        return await this.request.send(['person', id, request])
    }

    /**
     * 
     * @param {integer} id character ID
     * @param {string} request pictures
     */
    async findCharacter(id, request) {
        return await this.request.send(['character', id, request])
    }

    /**
     * 
     * @param {string} type anime/manga/people ect
     * @param {string} title title 
     * @param {string} param page, type, status, rated, genre, score, start_date, end_date, genre_exclude
     * @param {string} arg value for param
     *
     */
    async search(type, title, param, arg) {
        return await this.request.send(['search', type], {q: title, [param]: arg })

    }

    /**
     * 
     * @param {string} season summer, fall, winter, spring
     * @param {integer} year ex. 2019
     */
    async findSeason(season, year) {
        return await this.request.send(['season', season, year])
    }

    async findSchedule(day) {
        return await this.request.send(['schedule', day])
    }

}

var b = new JikanNode

b.search('anime', 'jojos', 'page', '2').then(a => console.log(a), c => console.log(c))