"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var RepositoryDetails = (function () {
    function RepositoryDetails(dataService) {
        this.dataService = dataService;
        this.isStarring = false;
        this.isStarred = false;
    }
    RepositoryDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.isRepositoryStarred(this.repository.full_name)
            .then(function (response) {
            _this.isStarred = true;
        }, function (response) {
            _this.isStarred = false;
        });
    };
    RepositoryDetails.prototype.isRepositoryStarred = function () {
        return this.isStarred;
    };
    RepositoryDetails.prototype.isOwner = function () {
        return this.repository.permissions.admin;
    };
    RepositoryDetails.prototype.star = function ($event) {
        var _this = this;
        if (this.isStarring) {
            return;
        }
        this.isStarring = true;
        if (!this.isStarred) {
            this.dataService.starRepository(this.repository.full_name).then(function () {
                _this.isStarred = !_this.isStarred;
                _this.isStarring = false;
            });
        }
        else {
            this.dataService.unStarRepository(this.repository.full_name).then(function () {
                _this.isStarred = !_this.isStarred;
                _this.isStarring = false;
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RepositoryDetails.prototype, "repository", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RepositoryDetails.prototype, "userdata", void 0);
    RepositoryDetails = __decorate([
        core_1.Component({
            selector: 'repository-details',
            template: "<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\" style=\"position: relative;\">{{repository.name}}\n      <span class=\"repo-actions\">\n        <a style=\"padding-top: 2px;text-decoration: none;\" class=\"glyphicon glyphicon-edit\" *ngIf=\"isOwner()\" href=\"#/repository/{{repository.full_name.split('/')[0]}}/{{repository.full_name.split('/')[1]}}/edit\"></a>\n        <span *ngIf=\"isOwner()\" style=\"margin-top: -4px\" class=\"badge\">admin</span>\n        <span *ngIf=\"userdata\" [ngClass]=\"{'glyphicon-star-empty': !isStarred, 'glyphicon-star': isStarred}\" class=\"glyphicon repo-star\" (click)=\"star($event)\"></span>\n      </span>\n    </div>\n    <div class=\"panel-body\" style=\"position: relative;\">\n      <div>{{repository.description}}</div>\n      <div>URL: <a href=\"{{repository.html_url}}\">{{repository.html_url}}</a></div>\n\n    </div>\n  </div>\n"
        }),
        __param(0, core_1.Inject('dataService')), 
        __metadata('design:paramtypes', [Object])
    ], RepositoryDetails);
    return RepositoryDetails;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RepositoryDetails;
