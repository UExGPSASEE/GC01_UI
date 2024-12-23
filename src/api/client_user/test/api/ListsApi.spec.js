/*
 * User and Profile Management API
 * API for managing users, profiles, and individual content lists.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.64
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UserAndProfileManagementApi);
  }
}(this, function(expect, UserAndProfileManagementApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new UserAndProfileManagementApi.ListsApi();
  });

  describe('(package)', function() {
    describe('ListsApi', function() {
      describe('usersUserIdProfilesProfileIdListsFavoritesContentIdDelete', function() {
        it('should call usersUserIdProfilesProfileIdListsFavoritesContentIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for usersUserIdProfilesProfileIdListsFavoritesContentIdDelete call
          /*

          instance.usersUserIdProfilesProfileIdListsFavoritesContentIdDelete(userId, profileId, contentId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersUserIdProfilesProfileIdListsFavoritesGet', function() {
        it('should call usersUserIdProfilesProfileIdListsFavoritesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for usersUserIdProfilesProfileIdListsFavoritesGet call and complete the assertions
          /*

          instance.usersUserIdProfilesProfileIdListsFavoritesGet(userId, profileId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(&#x27;number&#x27;);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersUserIdProfilesProfileIdListsFavoritesPost', function() {
        it('should call usersUserIdProfilesProfileIdListsFavoritesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for usersUserIdProfilesProfileIdListsFavoritesPost call
          /*

          instance.usersUserIdProfilesProfileIdListsFavoritesPost(body, userId, profileId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersUserIdProfilesProfileIdListsRecentlyWatchedContentIdDelete', function() {
        it('should call usersUserIdProfilesProfileIdListsRecentlyWatchedContentIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for usersUserIdProfilesProfileIdListsRecentlyWatchedContentIdDelete call
          /*

          instance.usersUserIdProfilesProfileIdListsRecentlyWatchedContentIdDelete(userId, profileId, contentId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersUserIdProfilesProfileIdListsRecentlyWatchedGet', function() {
        it('should call usersUserIdProfilesProfileIdListsRecentlyWatchedGet successfully', function(done) {
          // TODO: uncomment, update parameter values for usersUserIdProfilesProfileIdListsRecentlyWatchedGet call and complete the assertions
          /*

          instance.usersUserIdProfilesProfileIdListsRecentlyWatchedGet(userId, profileId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(&#x27;number&#x27;);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersUserIdProfilesProfileIdListsRecentlyWatchedPost', function() {
        it('should call usersUserIdProfilesProfileIdListsRecentlyWatchedPost successfully', function(done) {
          // TODO: uncomment, update parameter values for usersUserIdProfilesProfileIdListsRecentlyWatchedPost call
          /*

          instance.usersUserIdProfilesProfileIdListsRecentlyWatchedPost(body, userId, profileId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersUserIdProfilesProfileIdListsWatchLaterContentIdDelete', function() {
        it('should call usersUserIdProfilesProfileIdListsWatchLaterContentIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for usersUserIdProfilesProfileIdListsWatchLaterContentIdDelete call
          /*

          instance.usersUserIdProfilesProfileIdListsWatchLaterContentIdDelete(userId, profileId, contentId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersUserIdProfilesProfileIdListsWatchLaterGet', function() {
        it('should call usersUserIdProfilesProfileIdListsWatchLaterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for usersUserIdProfilesProfileIdListsWatchLaterGet call and complete the assertions
          /*

          instance.usersUserIdProfilesProfileIdListsWatchLaterGet(userId, profileId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(&#x27;number&#x27;);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersUserIdProfilesProfileIdListsWatchLaterPost', function() {
        it('should call usersUserIdProfilesProfileIdListsWatchLaterPost successfully', function(done) {
          // TODO: uncomment, update parameter values for usersUserIdProfilesProfileIdListsWatchLaterPost call
          /*

          instance.usersUserIdProfilesProfileIdListsWatchLaterPost(body, userId, profileId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
